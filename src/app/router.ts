import { Application } from 'egg';

export default (app: Application) => {
  const { router } = app;

  router.redirect('/api-docs/swagger', '/swagger-ui/index.html', 302);
};
