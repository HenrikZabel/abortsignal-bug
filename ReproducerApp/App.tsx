import React from 'react';
import {
  Button,
  View,
} from 'react-native';

const URL = "http://127.0.0.1:8000"

function App(): React.JSX.Element {
  const getStatus = () => {
    fetch(`${URL}/api/status`, {
      signal: AbortSignal.timeout(5000)
    }).then(response => {
      console.log(response)
    })
    .catch(err => {
      console.error(err.name, err.code, err.message, err.cause);
    })
  };

  return (
    <View>
      <Button
        title="Click"
        onPress={() => getStatus}
      />
    </View>
  );
}

export default App;
