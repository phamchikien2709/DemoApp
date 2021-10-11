import AsyncStorage from '@react-native-async-storage/async-storage';
type TValue = string | object | Array<any>;
type TReturn = string | object | null;

export async function setStoreData(name: string, value: TValue) {
  try {
    const val = typeof value === 'string' ? value : JSON.stringify(value);
    const res: any = await AsyncStorage.setItem(name, val);
    if (res) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

export async function getStoreData(name: string): TReturn {
  try {
    const res: any = await AsyncStorage.getItem(name);

    if (res) {
      return res;
    }
    return null;
  } catch (error) {
    return null;
  }
}

export async function setStoreToken(token: string) {
  return setStoreData('tokenApp', token);
}

export async function getStoreToken(): TReturn {
  const res = await getStoreData('tokenApp');
  return res;
}
