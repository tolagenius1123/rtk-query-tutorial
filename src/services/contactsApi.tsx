import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact } from "../model/contact.model";

export const contactsApi = createApi({
	reducerPath: "contactsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/contacts" }),
	tagTypes: ["Contact"],
	endpoints: (builder) => ({
		contacts: builder.query<Contact[], void>({
			query: () => "/",
			providesTags: ["Contact"],
		}),
		contact: builder.query<Contact, string>({
			query: (id) => `/${id}`,
			providesTags: ["Contact"],
		}),
		addContact: builder.mutation<{}, Contact>({
			query: (contact) => ({
				url: "/",
				method: "POST",
				body: contact,
			}),
			invalidatesTags: ["Contact"],
		}),
		deleteContact: builder.mutation<void, string>({
			query: (id) => ({
				url: `/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Contact"],
		}),
		updateContact: builder.mutation<void, Contact>({
			query: ({ id, ...rest }) => ({
				url: `/${id}`,
				method: "PUT",
				body: rest,
			}),
			invalidatesTags: ["Contact"],
		}),
	}),
});

export const {
	useContactsQuery,
	useAddContactMutation,
	useDeleteContactMutation,
	useContactQuery,
	useUpdateContactMutation,
} = contactsApi;
