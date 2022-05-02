import React, { ErrorInfo, ReactNode } from 'react';
import { ReserveComponent } from 'components/errorBoundary';

type Props = {
  children: ReactNode;
};
type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ReserveComponent />;
    }

    return this.props.children;
  }
}
