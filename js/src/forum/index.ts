import app from 'flarum/forum/app';

app.initializers.add('damonhu/flarum-login-modal', () => {
  console.log('[damonhu/flarum-login-modal] Hello, forum!');
  LogInModal.prototype.content = function () {
    return [];
    }
});
