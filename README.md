# Flowese Guide

A self-contained onboarding guide component that can be embedded into any React application to provide interactive tooltips and step-by-step guidance. Built with emotion CSS for complete style encapsulation.

## Features

- 🎯 **Anchor-based positioning** - Tooltips automatically position themselves relative to target elements
- 🔄 **API integration** - Fetches flows from Flowese admin API
- 🎨 **Style encapsulation** - Uses emotion CSS to prevent conflicts with host styles
- ⌨️ **Keyboard navigation** - Arrow keys and Escape support
- 📱 **Responsive** - Works on all screen sizes
- 🚀 **Self-contained** - No external CSS dependencies
- 🏢 **Third-party ready** - Designed for embedding in external websites

## Installation

```bash
npm install flowese-guide
```

## Usage

### Basic Usage

```tsx
import { FlowProvider } from "flowese-guide";

function App() {
  return (
    <FlowProvider
      config={{
        applicationId: "your-app-id",
        baseUrl: "https://your-api.com", // Optional, defaults to .env
      }}
    >
      <div>
        <h1>Welcome to My App</h1>

        {/* The onboarding guide will appear as a button */}
        <FlowProvider
          applicationId="your-app-id"
          onFlowComplete={(flowId) => console.log(`Flow ${flowId} completed!`)}
          onStepComplete={(stepId) => console.log(`Step ${stepId} completed!`)}
        />
      </div>
    </FlowProvider>
  );
}
```

### Advanced Usage

```tsx
import { FlowProvider, useFlowGuide } from "flowese-guide";

function CustomOnboardingTrigger() {
  const { showFlowSelection, flows, isLoading } = useFlowGuide();

  return (
    <div>
      <button onClick={showFlowSelection}>
        Start Onboarding ({flows.length} flows available)
      </button>

      {isLoading && <span>Loading flows...</span>}
    </div>
  );
}

function App() {
  return (
    <FlowProvider config={{ applicationId: "your-app-id" }}>
      <div>
        <CustomOnboardingTrigger />
        <FlowProvider applicationId="your-app-id" />
      </div>
    </FlowProvider>
  );
}
```

## Configuration

### Environment Variables

Add to your `.env` file:

```bash
VITE_FLOWESE_API_URL=http://localhost:5173
```

### Props

#### FlowProvider Props

| Prop             | Type                       | Required | Description                                  |
| ---------------- | -------------------------- | -------- | -------------------------------------------- |
| `applicationId`  | `string`                   | ✅       | The ID of the application to fetch flows for |
| `baseUrl`        | `string`                   | ❌       | Override the default API base URL            |
| `onFlowComplete` | `(flowId: string) => void` | ❌       | Callback when a flow is completed            |
| `onStepComplete` | `(stepId: string) => void` | ❌       | Callback when a step is completed            |

#### FlowProvider Config

| Property         | Type                       | Required | Description                       |
| ---------------- | -------------------------- | -------- | --------------------------------- |
| `applicationId`  | `string`                   | ✅       | The ID of the application         |
| `baseUrl`        | `string`                   | ❌       | Override the default API base URL |
| `onFlowComplete` | `(flowId: string) => void` | ❌       | Global flow completion callback   |
| `onStepComplete` | `(stepId: string) => void` | ❌       | Global step completion callback   |

## API Integration

The onboarding guide fetches flows from the Flowese admin API:

- **Endpoint**: `/api/flows?applicationId=${applicationId}`
- **Method**: `GET`
- **Response**: `{ success: boolean, flows: Flow[], error?: string }`

Only flows with `status: "active"` are displayed.

## Flow Structure

```typescript
interface Flow {
  id: string;
  name: string;
  description?: string;
  type: string;
  status: string;
  steps: FlowStep[] | number;
  createdAt: string;
  updatedAt: string;
  applicationId?: string;
  application?: { name: string } | null;
}

interface FlowStep {
  id: string;
  order: number;
  stepType: string;
  title: string;
  content?: string;
  targetElement?: string; // CSS selector for positioning
  position?: string | Record<string, unknown>;
  actions?: Record<string, unknown>;
  conditions?: Record<string, unknown>;
  navigationHint?: string;
}
```

## Positioning

Tooltips are positioned based on the `targetElement` CSS selector in each step:

- **Automatic positioning** - Tooltips automatically find the best position (top, bottom, left, right)
- **Scroll into view** - Target elements are automatically scrolled into viewport
- **Responsive** - Positions adjust on window resize

## Styling

The onboarding guide uses emotion CSS for complete style encapsulation:

- **No style conflicts** - All styles are scoped and won't interfere with your app
- **Customizable** - Override styles by targeting component data attributes
- **Theme-able** - Built-in support for light themes with dark theme coming soon

### Custom Styling

You can override styles using CSS-in-JS or regular CSS by targeting the component data attributes:

```css
/* Override tooltip styles */
[data-testid="flowese-tooltip"] {
  border-radius: 12px !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
}

/* Override button styles */
.flowese-guide-button {
  background: your-brand-color !important;
}
```

## TypeScript Support

This package is written in TypeScript and includes full type definitions. All components, hooks, and utilities are fully typed.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Keep components self-contained and style-encapsulated
2. Maintain the API contract
3. Update types and documentation
4. Test with different applications
5. Ensure no external CSS dependencies

## Troubleshooting

### Common Issues

1. **Flows not loading**: Check the API endpoint and application ID
2. **Tooltips not positioning**: Verify the `targetElement` selector exists in the DOM
3. **Style conflicts**: This shouldn't happen with emotion CSS, but check for very specific CSS overrides

### Debug Mode

Enable debug logging by setting:

```typescript
localStorage.setItem("flowese-debug", "true");
```

## License

MIT
