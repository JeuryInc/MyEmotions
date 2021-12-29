import React from "react";
import ConnectionError from "../components/connectionError/ConnectionError";
import { ErrorPage } from "../pages/errorPage/ErrorPage";

export default class ErrorBoundary extends React.Component<any, any> {
  constructor(props : any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: boolean) {
    return { hasError: true };
  } 
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.connectionError ? <ConnectionError /> : <ErrorPage />;
    }

    return this.props.children;
  }
}
