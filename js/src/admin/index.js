import app from "flarum/admin/app";

app.initializers.add("flarum-login-modal", function () {
  app.extensionData
    .for("flarum-login-modal")
    .registerSetting({
      label: "Replace Sign In and Sign Up button",
      help: (
        <span>
          Replace Sign In and Sign Up button with FoF Passport login (oAuth).{" "}
          <a
            href={"https://community.v17.dev/knowledgebase/41"}
            target={"_blank"}
          >
            Read more.
          </a>
        </span>
      ),
      setting: "flarum-login-modal.replaceLoginWithFoFPassport",
      type: "switch",
    })
    .registerSetting({
      label: "Allow user to change their email",
      help: (
        <span>
          Allow user to change their email via user account settings.{" "}
          <a
            href={"https://community.v17.dev/knowledgebase/42"}
            target={"_blank"}
          >
            Read more.
          </a>
        </span>
      ),
      setting: "flarum-login-modal.allowChangeMail",
      type: "switch",
    })
    .registerSetting({
      label: "Forgot password link",
      help: (
        <span>
          Replaces the forgot password link, only available if the login and
          registration forms aren't replaced.{" "}
          <a
            href={"https://community.v17.dev/knowledgebase/43"}
            target={"_blank"}
          >
            Read more.
          </a>
        </span>
      ),
      setting: "flarum-login-modal.forgotPasswordLink",
      type: "text",
      placeholder: "https://example.com/forgot",
    })
    .registerSetting({
      label: "Change password link",
      help: (
        <span>
          Replaces the account 'Change password' button.{" "}
          <a
            href={"https://community.v17.dev/knowledgebase/43"}
            target={"_blank"}
          >
            Read more.
          </a>
        </span>
      ),
      setting: "flarum-login-modal.changePasswordLink",
      type: "text",
      placeholder: "https://example.com/account",
    })
    .registerSetting({
      label: "New account welcome text",
      help: (
        <span>
          Give new users a warm welcome with a custom written welcome text.{" "}
          <a
            href={"https://community.v17.dev/knowledgebase/44"}
            target={"_blank"}
          >
            Read more.
          </a>
        </span>
      ),
      setting: "flarum-login-modal.signUpWelcomeText",
      type: "text",
      placeholder: "",
    });
});
