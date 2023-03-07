import { RiShutDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

const currentTime = new Date().getHours();
const greetings = (Number(currentTime) <= 12) ? "Bom dia" : (Number(currentTime) <= 19) ? "Boa tarde" : "Boa noite";

export function Header() {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Profile to="/profile">
        <img 
          src={avatarUrl} 
          alt={user.name} 
        />

        <div>
          <span>{greetings},</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}
