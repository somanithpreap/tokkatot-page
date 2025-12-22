# Tokkatot Website - Deployment Guide

## Server Deployment Instructions

### Prerequisites
- Docker and Docker Compose installed on the server
- Git installed on the server
- Port 80 available (or modify docker-compose.yml for different port)

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tokkatot_website
   ```

2. **Build and run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

   The website will be available at `http://server-ip`

### Updating the Website

When new changes are pushed to Git:

1. **Pull latest changes**
   ```bash
   git pull origin main
   ```

2. **Rebuild and restart**
   ```bash
   docker-compose down
   docker-compose up -d --build
   ```

### Viewing Logs

```bash
# Docker Compose
docker-compose logs -f

# Docker
docker logs -f tokkatot-website
```

### Stopping the Website

```bash
# Docker Compose
docker-compose down

# Docker
docker stop tokkatot-website
docker rm tokkatot-website
```

### Cleanup Old Images

```bash
docker system prune -a
```

### Troubleshooting

**Container won't start:**
- Check if port 80 is already in use: `sudo netstat -tlnp | grep :80`
- View logs: `docker-compose logs`

**Changes not appearing:**
- Ensure you ran `docker-compose up -d --build` to rebuild
- Clear browser cache

**Permission errors:**
- Run Docker commands with `sudo` if needed
- Add user to docker group: `sudo usermod -aG docker $USER`

### Performance Optimization

The Dockerfile uses:
- Multi-stage build (smaller final image)
- Alpine Linux (minimal size)
- Nginx with gzip compression
- Production build of React app