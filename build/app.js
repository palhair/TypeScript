"use strict";
const from = {
    name: 'Lord',
    password: '123'
};
const fromValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Должен быть длиннее 5 символов' },
};
