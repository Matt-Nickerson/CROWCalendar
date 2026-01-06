# Crow Calendar

Crow Calendar is a full-stack event management system built for fraternity use.  
It combines a web calendar, Slack command integration, and Outlook calendar sync so officers can manage events once and members can see them everywhere.

---

## Features

- Web calendar

  - Month and week views powered by FullCalendar
  - Real-time events from Supabase

- Slack integration

  - Officers can add events via Slack commands
  - Weekly automated post of upcoming events

- Outlook sync

  - Export events as an `.ics` file
  - Subscribe once and stay updated

- Supabase backend

  - Postgres database
  - Row-level security ready

- Next.js App Router
  - UI and API in one project
  - Server routes for Slack and ICS

---

## Tech Stack

| Layer        | Tech                                      |
| ------------ | ----------------------------------------- |
| Frontend     | Next.js (App Router), React, Tailwind CSS |
| Calendar UI  | FullCalendar                              |
| Backend      | Next.js API routes                        |
| Database     | Supabase (Postgres)                       |
| Integrations | Slack API, Outlook (ICS)                  |
| Hosting      | Self-hosted or cloud                      |

---

## Install dependencies

npm install
