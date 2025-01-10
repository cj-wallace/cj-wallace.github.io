# Use the official Nginx image from the Docker Hub
FROM nginx:latest

# Copy the content of the repository to the Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]