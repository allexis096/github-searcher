import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface User {
  login: string;
  name: string;
  email: string;
  location: string;
  company: string;
  bio: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  organizations_url: string;
  starred_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

interface UsersContextData {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);

export const UsersProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(() => {
    const userStorage = localStorage.getItem('GithubUser');

    if (userStorage) {
      return JSON.parse(userStorage);
    }

    return {} as User;
  });

  return (
    <UsersContext.Provider value={{ user, setUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export function useUsers(): UsersContextData {
  const context = useContext(UsersContext);

  return context;
}
