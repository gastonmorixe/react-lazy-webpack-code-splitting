import Form from "@rjsf/core";

import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

// const Form = JSONSchemaForm.default;

const schema: RJSFSchema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false },
  },
};

const log = (type: any) => console.log.bind(console, type);

const BigFatForm = () => (
  <Form
    schema={schema}
    validator={validator}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
  />
);

export default BigFatForm;
