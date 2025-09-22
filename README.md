# Grubify - Food Delivery App

A modern food delivery application built with React TypeScript frontend and .NET backend, designed for deployment to Azure Container Apps using Azure Developer CLI (azd).

## 🍕 Features

- **Modern UI**: Beautiful, responsive design inspired by popular food delivery apps
- **Real Food Content**: Sample restaurants and food items with real images from Unsplash
- **Complete Food Delivery Flow**: Browse restaurants → Add to cart → Checkout → Track orders
- **Azure Container Apps**: Scalable, serverless container hosting
- **Azure Developer CLI**: One-command deployment and management

## 🏗️ Architecture

- **Frontend**: React 18 + TypeScript + Material-UI
- **Backend**: .NET 9 Web API with RESTful endpoints
- **Infrastructure**: Azure Container Apps + Container Registry
- **Deployment**: Azure Developer CLI (azd)

## 🚀 Quick Start with Azure Developer CLI

### Prerequisites

- [Azure Developer CLI](https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/install-azd)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Azure subscription

### Deploy to Azure

1. **Initialize the project:**
   ```bash
   azd init
   ```

2. **Login to Azure:**
   ```bash
   azd auth login
   ```

3. **Deploy to Azure:**
   ```bash
   azd up
   ```

This will:
- Create Azure resources (Container Apps, Container Registry, etc.)
- Build and push Docker images
- Deploy both frontend and backend
- Provide you with the live URLs

### Local Development

1. **Run the backend:**
   ```bash
   cd GrubifyApi
   dotnet run
   ```

2. **Run the frontend:**
   ```bash
   cd grubify-frontend
   npm install
   npm start
   ```

3. **Access the app:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📱 API Endpoints

- `GET /api/restaurants` - List all restaurants
- `GET /api/restaurants/{id}` - Get restaurant details
- `GET /api/fooditems/restaurant/{id}` - Get menu items for restaurant
- `GET /api/cart/{userId}` - Get user's cart
- `POST /api/cart/{userId}/items` - Add item to cart
- `POST /api/orders` - Place an order
- `GET /api/orders/{id}` - Track order status

## 🎨 UI Features

- **Home Page**: Restaurant listings with search and filters
- **Restaurant Page**: Menu items with add-to-cart functionality
- **Cart Page**: Review items, modify quantities
- **Checkout**: Multi-step process with delivery and payment info
- **Order Tracking**: Real-time order status updates

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Material-UI (MUI) for components
- React Router for navigation
- Axios for API calls

### Backend
- .NET 9 Web API
- Entity Framework Core ready
- Swagger/OpenAPI documentation
- CORS enabled for frontend

### Infrastructure
- Azure Container Apps
- Azure Container Registry
- Azure Log Analytics
- Bicep for Infrastructure as Code

## 🔧 Configuration

### Environment Variables

The app uses the following environment variables:

**Frontend:**
- `REACT_APP_API_BASE_URL` - Backend API URL

**Backend:**
- `ASPNETCORE_ENVIRONMENT` - Environment (Development/Production)
- `ASPNETCORE_URLS` - Binding URLs

### Azure Configuration

Configure your deployment with `azd env set`:

```bash
azd env set AZURE_LOCATION eastus2
azd env set AZURE_SUBSCRIPTION_ID your-subscription-id
```

## 📦 Project Structure

```
grubify/
├── GrubifyApi/                 # .NET Backend
│   ├── Controllers/            # API Controllers
│   ├── Models/                 # Data Models
│   ├── Dockerfile             # Backend container
│   └── Program.cs             # App configuration
├── grubify-frontend/          # React Frontend
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── services/         # API services
│   │   └── types/            # TypeScript types
│   ├── Dockerfile            # Frontend container
│   └── nginx.conf            # Nginx configuration
├── infra/                    # Azure Infrastructure
│   ├── main.bicep           # Main Bicep template
│   ├── main.parameters.json # Parameters file
│   └── core/                # Bicep modules
└── azure.yaml               # Azure Developer CLI config
```

## 🚀 Deployment

### Azure Developer CLI Commands

```bash
# Deploy everything
azd up

# Deploy just the infrastructure
azd provision

# Deploy just the application code
azd deploy

# Monitor resources
azd monitor

# View environment details
azd show

# Clean up resources
azd down
```

### Manual Azure Deployment

If you prefer manual deployment:

1. Create Azure Container Registry
2. Build and push images
3. Create Container Apps Environment
4. Deploy container apps

See the `infra/` directory for Bicep templates.

## 🍔 Sample Data

The app includes sample data for:
- 5 restaurants with different cuisines (Italian, Japanese, Indian, American, Healthy)
- 15+ food items with real images
- Complete menu categorization
- Realistic pricing and descriptions

## 🔐 Security

- CORS configured for frontend domain
- Azure Managed Identity for container registry access
- Environment-based configuration
- Secure API communication

## 📈 Monitoring

- Azure Log Analytics integration
- Container Apps built-in monitoring
- Application Insights ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `azd up`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For Azure Developer CLI issues, visit the [azd documentation](https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/).

For application issues, please create an issue in this repository.
