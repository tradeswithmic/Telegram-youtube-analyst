// Vercel Serverless Function for Telegram Bot
// Path: api/webhook.js

// Dependencies ko import karein
const { Telegraf } = require('telegraf');
const fetch = require('node-fetch');

// Environment variables se keys uthaen
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Gemini API Configuration
const MODEL_NAME = 'gemini-2.5-flash-preview-09-2025';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent`;

// Telegraf bot instance
const bot = new Telegraf(BOT_TOKEN);

// Error handling ke liye utility function
async function fetchWithRetry(url, options, retries = 3) {
    for (let i = 0; i < retries
