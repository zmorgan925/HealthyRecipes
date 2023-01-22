import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, theme, onPress }) {
    if (theme === "primary") {
        return (
          <View
          style={[styles.buttonContainer, { borderWidth: 4, borderColor: "gray" }]}
          >
            <Pressable
              style={[styles.button, { backgroundColor: "gray" }]}
              onPress={onPress}
            >
              <Text style={[styles.buttonLabel, { color: "#ffffff" }]}>{label}</Text>
            </Pressable>
        </View>
        );
      }

return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    height: 60,
    marginTop: 30, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 20,
  },
});
