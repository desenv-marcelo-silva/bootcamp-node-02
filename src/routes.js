import { Router } from 'express';

import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionControllers';

import authMiddleware from './app/middlewares/auth';
