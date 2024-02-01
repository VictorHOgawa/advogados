import Theme from "@/styles/themes";
import { Header } from "./styles";
import { NotificationSVG } from "../../../../public/sidebar/notification";

export function HeaderComponent() {
  return (
    <Header>
      <strong>Seja bem-vindo, Robert</strong>
      <span>
        <NotificationSVG />
      </span>
    </Header>
  );
}
