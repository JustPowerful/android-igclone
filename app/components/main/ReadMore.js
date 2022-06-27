import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

class readMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTruncated: true,
      resultString:
        this.props.elementText.substring(0, this.props.maxCharacterCount) +
        "...read more",
    };

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    this.setState(
      (prevState) => ({ isTruncated: !prevState.isTruncated }),
      () => {
        if (this.state.isTruncated) {
          this.setState({
            resultString:
              this.props.elementText.substring(
                0,
                this.props.maxCharacterCount
              ) + "...read more",
          });
        } else {
          this.setState({
            resultString: this.props.elementText,
          });
        }
      }
    );
  }

  render() {
    return <Text onPress={this.handlePress}>{this.state.resultString}</Text>;
  }
}

export default readMore;
// wrong
// {
//   const handlePress = () => {
//     setIsTruncated((oldState) => !oldState);
//   };

//   return (
//     <View>
//       <TouchableOpacity onPress={handlePress}>
//         <Text>{resultString}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

const styles = StyleSheet.create({});
