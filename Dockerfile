# Use an official Golang runtime as a parent image
FROM golang:alpine AS builder

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy the go.mod and go.sum files
COPY go.mod go.sum ./

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Copy the source code into the container
COPY . .

# Add DATABASE_URL ARG and ENV variables
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

# Build the Go app
RUN go build -o main .

# Start a new stage from scratch
FROM alpine:latest AS runner

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy the Pre-built binary file from the previous stage
COPY --from=builder /app/main .

# Add DATABASE_URL ARG and ENV variables
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

# Command to run the executable
CMD ["./main"]
