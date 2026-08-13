# ──────────────────────────────────────────────────
# Link        https://www.hackerrank.com/challenges/predicting-office-space-price/problem?isFullScreen=true
# Problem     Polynomial Regression: Office Prices
# Difficulty  Easy
# Subdomain   Statistics and Machine Learning
# Platform    HackerRank
# Language    python3
# Status      Accepted
# Submitted   2026-08-13, 10:33 a.m.
# Technique   polynomial-feature-linear-regression
# Time        O(N * F^3)
# Space       O(N * F^3)
# Insight     The implementation maps input features into a higher-dimensional space using a third-degree polynomial expansion to capture non-linear relationships before applying ordinary least squares regression.
# Interview   Before: "I would use simple linear regression to model the office prices." After: "Since the relationship is non-linear, I use PolynomialFeatures with degree 3 to transform the input, achieving O(N * F^3) complexity, which effectively captures the polynomial order less than 4 constraint."
# Pitfalls    (1) Failing to account for the F+1 column structure when parsing the training data, which leads to incorrect feature and target alignment.  (2) Assuming a linear relationship when the problem explicitly states the price is a polynomial function of order less than 4.
# ──────────────────────────────────────────────────

import sys
import numpy as np
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

# Read all standard input at once
input_data = sys.stdin.read().split()
if input_data:
    F, N = int(input_data[0]), int(input_data[1])
    
    idx = 2
    # Parse training features and targets
    X_train = [list(map(float, input_data[idx + i*F + i : idx + (i+1)*F + i])) for i in range(N)]
    y_train = [float(input_data[idx + (i+1)*F + i]) for i in range(N)]
    
    idx += N * (F + 1)
    T = int(input_data[idx])
    idx += 1
    
    # Parse test features
    X_test = [list(map(float, input_data[idx + i*F : idx + (i+1)*F])) for i in range(T)]
    
    # Polynomial transformation (order < 4 -> degree=3)
    poly = PolynomialFeatures(degree=3)
    X_train_poly = poly.fit_transform(X_train)
    X_test_poly = poly.transform(X_test)
    
    # Model training and prediction
    model = LinearRegression().fit(X_train_poly, y_train)
    predictions = model.predict(X_test_poly)
    
    # Print predictions formatted to 2 decimal places
    for p in predictions:
        print(f"{p:.2f}")
