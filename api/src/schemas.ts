import express from 'express'
import { Speakers, Tracker } from 'shared'
import * as yup from 'yup'

const createOrUpdateTrackerSchema: yup.SchemaOf<Omit<Tracker, 'id'>> =
  yup.object({
    name: yup.string().required(),
    phrases: yup.array().of(yup.string().required()).min(1).required(),
    speaker: yup
      .mixed<Tracker['speaker']>()
      .oneOf([...Speakers])
      .required(),
  })

export const createTrackerRequestSchema = yup.object({
  body: createOrUpdateTrackerSchema,
})

export const updateTrackerRequestSchema = yup.object({
  body: createOrUpdateTrackerSchema,
  params: yup.object({
    id: yup.number().required(),
  }),
})

export const validate =
  (schema: yup.AnySchema) =>
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      return next()
    } catch (err) {
      return res.status(400).json({ type: err.name, message: err.message })
    }
  }
