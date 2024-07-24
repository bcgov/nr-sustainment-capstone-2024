# Raspberry Calculation Guide

## Agronomic Balance (lb/ac)

### Nitrogen Calculation

```javascript
N = 0

if sawdust:
N += 25

Y = Yield (Tons/Ac)

if Y > 5.35:            // Low
N += 89

if  3.35 > Y <= 5.35:    // Medium
N += 71

if Y <= 3.35:           // High
N += 54

return N
```

### Phosphorus Calculation

```javascript
P = 0   // P2O5 requirement(lb/ac)

ST = Soil Test P (ppm)
LT = Leaf Tissue P (%)

if ST >= 30:
    if LT >= 0.19:
        P += 0
    if 0.16 >= LT < 0.19:
        P += 30
    if LT < 0.16:
        P += 40

if 15 >= ST < 30:
    if LT >= 0.19:
        P += 30
    if 0.16 >= LT < 0.19:
        P += 60
    if LT < 0.16:
        P += 70

if ST < 15:
    if LT >= 0.19:
        P += 40
    if 0.16 >= LT < 0.19:
        P += 70
    if LT < 0.16:
        P += 80

return P
```

### Potassium Calculation

```javascript
K = 0       // K2O requirement (lb/ac)

ST = Soil Test K (ppm)
LT = Leaf Tissue K (%)

if ST >= 280:
    if LT >= 1.25:
        K += 0
    if 1 >= LT < 1.25:
        K += 30
    if LT < 1:
        K += 50

if 120 >= ST < 280:
    if LT >= 1.25:
        K += 30
    if 1 >= LT < 1.25:
        K += 60
    if LT < 1:
        K += 80

if ST < 120:
    if LT >= 1.25:
        K += 50
    if 1 >= LT < 1.25:
        K += 80
    if LT < 1:
        K += 100

return K
```

## Crop Removal Balance (lb/ac)

### Phosphorus Removal

```javascript
P = 0       // P2O5 (lb/ac)

Y = Yield (Tons/Ac)

P += Y * 1.145      // Fruit: P2O5 removal (lb/ton fruit)

if Pruned == true and Removed == true:
    P +=  2.748      // Pruning: P2O5 removal (lb/ton fruit)

return P
```

### Potassium Removal

```javascript
K = 0       // K2O (lb/ac)

Y = Yield (Tons/Ac)

K += Y * 3.64      // Fruit: K20 removal (lb/ton fruit)

if Pruned == true and Removed == true:
    K +=  11.374      // Pruning: K20 removal (lb/ton fruit)

return K
```
