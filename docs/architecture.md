# DocFind System Architecture

## System Flow

React Frontend
↓
Express API
↓
Backend Services
↓
SQL Database
↓
PDF Processing

## Frontend

Responsible for:
- User interface
- PDF upload
- Search input
- Search results
- PDF preview

## Backend

Responsible for:
- API endpoints
- File upload handling
- PDF processing
- Search logic
- Error handling

## Database

Responsible for:
- Storing document information
- Storing page information
- Storing extracted PDF text
- Connecting documents with their pages

## PDF Processing

Responsible for:
- Reading uploaded PDFs
- Extracting text page by page
- Preserving page numbers
- Preparing text for search
