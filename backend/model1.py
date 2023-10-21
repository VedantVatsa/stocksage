import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.metrics import r2_score, mean_absolute_error
from xgboost import XGBRegressor
import joblib

def model_train_fun():
    # Load the extended dataset
    df = pd.read_csv('../Data/fake_data.csv').drop(['Unnamed: 0'], axis=1)
    df['InvoiceDate'] = pd.to_datetime(df['InvoiceDate'])

    # Define features and targets (predicting quantity and revenue)
    X = df.drop(['Quantity', 'Revenue', 'Week', 'Weekday', 'Day', 'InvoiceDate', 'ProductCategory'], axis=1)
    Y_quantity = df['Quantity']
    Y_revenue = df['Revenue']

    category_col = ['StockCode']  # Include new categorical columns

    # Specify a default imputer for missing columns
    from sklearn.impute import SimpleImputer
    default_imputer = SimpleImputer(strategy='constant', fill_value=0)

    preprocesser = ColumnTransformer(
        transformers=[
            ('cat', OneHotEncoder(handle_unknown='ignore'), category_col),
            ('num', default_imputer, ['TotalPrice', 'UnitPrice'])  # Adjust columns to match your dataset
        ],
        remainder='passthrough'
    )

    X_transform = preprocesser.fit_transform(X)

    # Split the data into training and testing sets
    X_train, X_test, Y_quantity_train, Y_quantity_test, Y_revenue_train, Y_revenue_test = train_test_split(
        X_transform, Y_quantity, Y_revenue, test_size=0.2, random_state=42)

    # Create and train the XGBoost model for Quantity
    quantity_model = XGBRegressor(n_estimators=1000, learning_rate=0.1, random_state=42)
    quantity_model.fit(X_train, Y_quantity_train, early_stopping_rounds=10, eval_set=[(X_test, Y_quantity_test)], verbose=False)

    # Make predictions for quantity on the test set
    Y_quantity_pred = quantity_model.predict(X_test)

    # Create and train the XGBoost model for Revenue
    revenue_model = XGBRegressor(n_estimators=1000, learning_rate=0.1, random_state=42)
    revenue_model.fit(X_train, Y_revenue_train, early_stopping_rounds=10, eval_set=[(X_test, Y_revenue_test)], verbose=False)

    # Make predictions for revenue on the test set
    Y_revenue_pred = revenue_model.predict(X_test)

    # Calculate evaluation metrics for Quantity
    r2_quantity = r2_score(Y_quantity_test, Y_quantity_pred)
    mape_quantity = np.mean(np.abs((Y_quantity_pred - Y_quantity_test) / Y_quantity_test)) * 100
    accuracy_quantity = max(0, min(100, 100 * (1 - mape_quantity / 100)))

    # Calculate evaluation metrics for Revenue
    r2_revenue = r2_score(Y_revenue_test, Y_revenue_pred)
    mape_revenue = np.mean(np.abs((Y_revenue_pred - Y_revenue_test) / Y_revenue_test)) * 100
    accuracy_revenue = max(0, min(100, 100 * (1 - mape_revenue / 100)))

    # Print the results for Quantity
    print("Quantity Prediction Results:")
    print(f'R^2 Score: {r2_quantity:.2f}')
    print(f'Mean Absolute Percentage Error (MAPE): {mape_quantity:.2f}%')
    print(f'Accuracy: {accuracy_quantity:.2f}%')

    # Print the results for Revenue
    print("\nRevenue Prediction Results:")
    print(f'R^2 Score: {r2_revenue:.2f}')
    print(f'Mean Absolute Percentage Error (MAPE): {mape_revenue:.2f}%')
    print(f'Accuracy: {accuracy_revenue:.2f}%')

    # Save the preprocessing transformation and models for Quantity and Revenue
    joblib.dump(preprocesser, 'preprocesser1.pkl')
    joblib.dump(quantity_model, 'quantity_model1.pkl')
    joblib.dump(revenue_model, 'revenue_model1.pkl')

# Call the function to train the models
model_train_fun()
