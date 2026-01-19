import type { AxiosInstance } from "axios";
import {
  createEventRequestSchema,
  eventResponseSchema,
  updateEventRequestSchema,
  updateEventStatusRequestSchema,
  type CreateEventRequest,
  type EventResponse,
  type UpdateEventRequest,
  type UpdateEventStatusRequest,
} from "@event-platform/validators";

export function eventsApi(client: AxiosInstance) {
  return {
    async create(payload: CreateEventRequest): Promise<EventResponse> {
      const body = createEventRequestSchema.parse(payload);
      const res = await client.post("/api/events", body);
      return eventResponseSchema.parse(res.data);
    },

    async list(): Promise<EventResponse[]> {
      const res = await client.get("/api/events");
      return eventResponseSchema.array().parse(res.data);
    },

    async getById(eventId: string): Promise<EventResponse> {
      const res = await client.get(`/api/events/${eventId}`);
      return eventResponseSchema.parse(res.data);
    },

    async update(eventId: string, payload: UpdateEventRequest): Promise<EventResponse> {
      const body = updateEventRequestSchema.parse(payload);
      const res = await client.patch(`/api/events/${eventId}`, body);
      return eventResponseSchema.parse(res.data);
    },

    async updateStatus(eventId: string, payload: UpdateEventStatusRequest): Promise<EventResponse> {
      const body = updateEventStatusRequestSchema.parse(payload);
      const res = await client.patch(`/api/events/${eventId}/status`, body);
      return eventResponseSchema.parse(res.data);
    },
  };
}
