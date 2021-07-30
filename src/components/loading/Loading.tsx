import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {loadingStyles} from './LoadingStyles';

export default class MyLoading extends React.Component {
  minShowingTime: number;
  startTime: number;
  state: UseLoading;

  constructor(props: any) {
    super(props);
    this.minShowingTime = 200;
    this.startTime = 0;

    this.state = {
      isLoading: false,
      setIsLoading: (isLoading: boolean) => {
        if (isLoading !== this.state.isLoading) {
          let curTimeLong = new Date().getTime();
          if (isLoading) {
            this.startTime = curTimeLong;
            this.setState({
              isLoading,
            });
          } else {
            let hasShowingTimeLong = curTimeLong - this.startTime;
            if (hasShowingTimeLong < this.minShowingTime) {
              setTimeout(() => {
                this.setState({
                  isLoading,
                });
              }, this.minShowingTime - hasShowingTimeLong);
            } else {
              this.setState({
                isLoading,
              });
            }
          }
        }
      },
    };
  }

  showLoading = () => {
    this.state.setIsLoading(true);
  };
  dismissLoading = () => {
    this.state.setIsLoading(false);
  };

  render() {
    if (!this.state.isLoading) {
      return null;
    }
    return (
      <View style={loadingStyles.loadingContainer}>
        <View style={loadingStyles.loading}>
          <ActivityIndicator color="white" />
          <Text style={loadingStyles.loadingTitle}>Please wait...</Text>
        </View>
      </View>
    );
  }
}

type UseLoading = {
  isLoading: boolean;
  setIsLoading: (arg0: boolean) => void;
};
