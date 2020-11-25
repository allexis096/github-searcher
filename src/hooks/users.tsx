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
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface UsersContextData {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;

  newUser: string;
  setNewUser: Dispatch<SetStateAction<string>>;

  profile: User;
  setProfile: Dispatch<SetStateAction<User>>;
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

  const [newUser, setNewUser] = useState('');
  const [profile, setProfile] = useState<User>({} as User);

  return (
    <UsersContext.Provider
      value={{ user, setUser, newUser, setNewUser, profile, setProfile }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export function useUsers(): UsersContextData {
  const context = useContext(UsersContext);

  return context;
}
