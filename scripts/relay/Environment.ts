/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import { useMemo } from "react";
import {
Network,
Variables,
RequestParameters,
Environment,
RecordSource,
Store,
} from "relay-runtime";
import fetch from "isomorphic-unfetch";
import { RecordMap } from "../../typings";
import "abortcontroller-polyfill";

const abortController = new AbortController();

async function fetchQuery(operation: RequestParameters, variables: Variables) {
const endpoint = "https://crm.Joovlly.net/graphql-playground";
const response = await fetch(endpoint, {
method: "POST",
headers: {
Accept: "application/json",
"Content-Type": "application/json",
}, // Add authentication and other headers here
signal: abortController.signal,
body: JSON.stringify({
query: operation.text, // GraphQL text from input
variables,
}),
});

return await response.json();
}

type InitProps = {
records?: any;
};

const network = Network.create(fetchQuery);

export function initEnvironment(options: InitProps = {}) {
const { records = {} as RecordMap } = options;
const environment = new Environment({
network,
store: new Store(new RecordSource(records)),
});
return environment;
}

export function useEnvironment(initialRecords: RecordMap, connection: Boolean) {
const store = useMemo(() => initEnvironment({ records: initialRecords }), [initialRecords]);

return store;
}