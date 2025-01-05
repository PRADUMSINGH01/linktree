"use server"

import bcrypt from 'bcrypt'

export default async function HashPassword(password) {
const saltRounds = 10;
const HashPassword = bcrypt.hash(password, saltRounds);
    return HashPassword
}