import React, {useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, FlatList, View} from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';

const url = 'https://jsonplaceholder.typicode.com/users';

const Screen1 = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHandler = http => {
    fetch(http)
      .then(response => response.json())
      .then(responseJson => {
        setUsersData(responseJson);
      })
      .catch(error => {
        console.log('error:::', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHandler(url);
  }, []);

  const renderItem = ({item}) => <Card item={item} />;

  return (
    <View style={styles.root}>
      <Header title="Contacts" />
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#00ADD3"
          style={styles.indicatorStyle}
        />
      ) : (
        <FlatList
          data={usersData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.scrollStyles}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollStyles: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  indicatorStyle: {
    flex: 1,
  },
});

export default Screen1;
