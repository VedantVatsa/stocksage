from fastapi import FastAPI, File, UploadFile, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import joblib
import csv
import codecs
from fastapi import FastAPI, File, UploadFile, BackgroundTasks
import pandas as pd
import joblib
import csv
import codecs

# Load your trained model and preprocessor
preprocessor = joblib.load('preprocesser.pkl')
loaded_model = joblib.load('model.pkl')

app = FastAPI()

# Define the origins that are allowed to make cross-origin requests.
origins = ["http://localhost:5173"]

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

@app.post("/data")
async def read_data(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
    csvReader = csv.DictReader(codecs.iterdecode(file.file, 'utf-8'))
    data_list = [row for row in csvReader]
    new_data = pd.DataFrame(data_list)
    new_data_transformed = preprocessor.transform(new_data)
    new_predictions = loaded_model.predict(new_data_transformed)
    top_selling_indices = new_predictions.argsort()[-10:][::-1]
    top_selling_stockcodes = new_data.loc[top_selling_indices, 'StockCode']
    top_selling_quantities = new_predictions[top_selling_indices]
    top_selling_items = []
    for stockcode, quantity in zip(top_selling_stockcodes, top_selling_quantities):
        item = {'StockCode': stockcode, 'PredictedQuantity': float(quantity)}
        top_selling_items.append(item)
    background_tasks.add_task(file.file.close)
    return {"data": top_selling_items}
