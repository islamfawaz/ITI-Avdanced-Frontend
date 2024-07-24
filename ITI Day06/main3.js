function validateNo(e) {
    const charCode = e.charCode;

    if (charCode === 8 || charCode === 46 || charCode === 37 || charCode === 39) {
        return true;
    }

    if (charCode < 48 || charCode > 57) {
        e.preventDefault();
        return false;
    }

    return true;
}
