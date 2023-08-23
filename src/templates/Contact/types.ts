import { z } from 'zod'
import { schema } from './schemas'

export type FormValues = z.infer<typeof schema>
