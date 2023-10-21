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
    # Load the dataset
    df = pd.read_csv('../Data/data.csv').drop(['Unnamed: 0'], axis=1)
    df['InvoiceDate'] = pd.to_datetime(df['InvoiceDate'])

    # Define features and target
    X = df.drop(['Quantity', 'Week', 'Weekday', 'Day', 'InvoiceDate'], axis=1)
    Y = df['Quantity']

    category_col = ['StockCode']

    # Specify a default imputer for missing columns
    from sklearn.impute import SimpleImputer
    default_imputer = SimpleImputer(strategy='constant', fill_value=0)

    preprocesser = ColumnTransformer(
        transformers=[
            ('cat', OneHotEncoder(handle_unknown='ignore'), category_col),
            ('num', default_imputer, ['TotalPrice', 'UnitPrice'])  # Handle missing numerical columns
        ],
        remainder='passthrough'
    )

    X_transform = preprocesser.fit_transform(X)

    # Split the data into training and testing sets
    X_train, X_test, Y_train, Y_test = train_test_split(X_transform, Y, test_size=0.2, random_state=42)

    # Create and train the XGBoost model
    model = XGBRegressor(n_estimators=1000, learning_rate=0.1, random_state=42)
    model.fit(X_train, Y_train, early_stopping_rounds=10, eval_set=[(X_test, Y_test)], verbose=False)

    # Make predictions on the test set
    Y_pred = model.predict(X_test)

    # Calculate evaluation metrics
    r2 = r2_score(Y_test, Y_pred)
    mape = np.mean(np.abs((Y_pred - Y_test) / Y_test)) * 100
    accuracy = max(0, min(100, 100 * (1 - mape / 100)))

    # Identify top-selling items
    top_selling_indices = Y_pred.argsort()[-10:][::-1]
    top_selling_stockcodes = X.loc[top_selling_indices, 'StockCode']
    top_selling_quantities = Y_pred[top_selling_indices]

    # Print the results
    print(f'R^2 Score: {r2:.2f}')
    print(f'Mean Absolute Percentage Error (MAPE): {mape:.2f}%')
    print(f'Accuracy: {accuracy:.2f}%')

    # Visualize the predicted vs. actual quantities
    plt.figure(figsize=(10, 6))
    plt.scatter(Y_test, Y_pred, alpha=0.5)
    plt.xlabel('Actual Quantities')
    plt.ylabel('Predicted Quantities')
    plt.title('Actual vs. Predicted Quantities')
    plt.grid(True)
    plt.show()

    # Create a bar chart for top-selling items
    plt.figure(figsize=(10, 6))
    plt.bar(top_selling_stockcodes, top_selling_quantities)
    plt.xlabel('StockCode')
    plt.ylabel('Predicted Quantity')
    plt.title('Top Selling Items and Predicted Quantities')
    plt.xticks(rotation=45)
    plt.show()

    # Save the preprocessing transformation and model
    joblib.dump(preprocesser, 'preprocesser.pkl')
    joblib.dump(model, 'model.pkl')

# Call the function to train the model
model_train_fun()
