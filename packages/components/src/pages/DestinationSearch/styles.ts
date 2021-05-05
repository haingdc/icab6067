import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 0,
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 5,
    borderRadius: 25,
    marginRight: 15,
  },
  locationText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    borderRadius: 15,
    top: 20,
    left: 10,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: '#919191',
    position: 'absolute',
    top: 28,
    left: 11.5,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: 10,
  },
})

export default styles