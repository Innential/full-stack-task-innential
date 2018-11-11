import { SCOPES } from '~/config';
import { DIRECTIVES } from '~/directives';

export const canReadComments = `${DIRECTIVES.IS_ALLOWED.FUNC_NAME}(${DIRECTIVES.IS_ALLOWED.SCOPE}: ["${SCOPES.OPERATION.READ}:${SCOPES.TYPE.COMMENTS}"])`;
export const canReadProfile = `${DIRECTIVES.IS_ALLOWED.FUNC_NAME}(${DIRECTIVES.IS_ALLOWED.SCOPE}: ["${SCOPES.OPERATION.READ}:${SCOPES.TYPE.PROFILE}"])`;
export const isAdmin = `${DIRECTIVES.HAS_ROLE.FUNC_NAME}(${DIRECTIVES.HAS_ROLE.SCOPE}: ["${SCOPES.ROLES.ADMIN}"])`;
export const isUser = `${DIRECTIVES.HAS_ROLE.FUNC_NAME}(${DIRECTIVES.HAS_ROLE.SCOPE}: ["${SCOPES.ROLES.USER}"])`;

