# main.py

from fastapi import FastAPI, File, UploadFile, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import joblib
import csv
import codecs
from typing import List
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer

# Load your trained model and preprocessor
preprocessor = joblib.load('preprocesser1.pkl')
quantity_model = joblib.load('quantity_model1.pkl')
revenue_model = joblib.load('revenue_model1.pkl')

app = FastAPI()

# Define the origins that are allowed to make cross-origin requests.
origins = ["http://localhost:5173"]  # Update with your frontend's origin

# Configure CORS to allow requests from specified origins.
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/data", response_model=List[dict])
async def read_data(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
    csvReader = csv.DictReader(codecs.iterdecode(file.file, 'utf-8'))
    data_list = [row for row in csvReader]
    new_data = pd.DataFrame(data_list)
    new_data_transformed = preprocessor.transform(new_data)

    # Predict Quantity using the quantity_model
    new_quantity_predictions = quantity_model.predict(new_data_transformed)

    # Predict Revenue using the revenue_model
    new_revenue_predictions = revenue_model.predict(new_data_transformed)

    top_selling_indices_quantity = new_quantity_predictions.argsort()[-10:][::-1]
    top_selling_stockcodes = new_data.loc[top_selling_indices_quantity, 'StockCode']

    top_selling_indices_revenue = new_revenue_predictions.argsort()[-10:][::-1]
    top_selling_revenues = new_revenue_predictions[top_selling_indices_revenue]

    top_selling_items = []

    # Modify the format to match React's expectation
    for stockcode, quantity, revenue in zip(top_selling_stockcodes, new_quantity_predictions, new_revenue_predictions):
        item = {
            'StockCode': stockcode,
            'PredictedQuantity': float(quantity),  # Quantity
            'PredictedRevenue': float(revenue),  # Revenue
        }

        top_selling_items.append(item)

    background_tasks.add_task(file.file.close)
    return top_selling_items
