import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Govern from "./pages/product/Govern";
import Guide from "./pages/product/Guide";
import Validate from "./pages/product/Validate";
import Measure from "./pages/product/Measure";
import Solutions from "./pages/Solutions";
import Enterprise from "./pages/Enterprise";
import Pricing from "./pages/Pricing";
import About from "./pages/company/About";
import Careers from "./pages/company/Careers";
import Contact from "./pages/company/Contact";
import Blog from "./pages/company/Blog";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Security from "./pages/legal/Security";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/product/govern"} component={Govern} />
      <Route path={"/product/guide"} component={Guide} />
      <Route path={"/product/validate"} component={Validate} />
      <Route path={"/product/measure"} component={Measure} />
      <Route path={"/solutions"} component={Solutions} />
      <Route path={"/enterprise"} component={Enterprise} />
      <Route path={"/pricing"} component={Pricing} />
      <Route path={"/company/about"} component={About} />
      <Route path={"/company/careers"} component={Careers} />
      <Route path={"/company/contact"} component={Contact} />
      <Route path={"/company/blog"} component={Blog} />
      <Route path={"/legal/privacy"} component={Privacy} />
      <Route path={"/legal/terms"} component={Terms} />
      <Route path={"/legal/security"} component={Security} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
