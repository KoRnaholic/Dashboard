import setting from "../../icons/setting.png";
import logout from "../../icons/logout.png";

function Settings() {
  return (
    <div>
      <ul className="settings">
        <li>
          <img src={setting} alt="setting" />
          <a href="/settings">Settings</a>
        </li>
        <li>
          <img src={logout} alt="logout" />
          <a style={{ color: "#b97f7f" }} href="/logout">
            Log out
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Settings;
