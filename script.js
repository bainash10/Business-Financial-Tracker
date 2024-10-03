function calculateBreakEven() {
    const fixedCost = parseFloat(document.getElementById('fixedCost').value);
    const variableCost = parseFloat(document.getElementById('variableCost').value);
    const sellingPrice = parseFloat(document.getElementById('sellingPrice').value);
    const unitsSold = parseFloat(document.getElementById('unitsSold').value);

    if (sellingPrice <= variableCost) {
        alert("Selling price must be greater than variable cost.");
        return;
    }

    // Calculate Break-Even Point
    const breakEvenUnits = Math.ceil(fixedCost / (sellingPrice - variableCost));

    // Calculate Total Revenue
    const totalRevenue = unitsSold * sellingPrice;

    // Calculate Total Costs
    const totalCosts = fixedCost + (variableCost * unitsSold);

    // Calculate Profit or Loss
    const profitLoss = totalRevenue - totalCosts;

    // Display Results
    document.getElementById('breakEvenPoint').innerHTML = breakEvenUnits;
    document.getElementById('totalRevenue').innerHTML = totalRevenue.toFixed(2);
    document.getElementById('totalCosts').innerHTML = totalCosts.toFixed(2);
    document.getElementById('profitLoss').innerHTML = profitLoss.toFixed(2);
}
