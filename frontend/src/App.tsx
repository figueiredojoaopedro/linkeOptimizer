import "./App.css";

import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import {
  FieldGroup,
  FieldLabel,
  FieldTitle,
  FieldSet,
  Field,
} from "./components/ui/field";

function App() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="font-bold">LinkeOptimizer</h1>
        </div>
        <div>
          <p className="font-normal">
            Generate precise LinkedIn job search queries tailored to your
            skills, seniority, and goals.
          </p>
        </div>
      </div>
      <div className="my-6">
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldTitle className="text-xl">Get a query!</FieldTitle>

              <FieldGroup className="flex flex-col gap-3">
                <FieldLabel>Desired Role(s)</FieldLabel>
                <Input
                  type="text"
                  placeholder="Software Engineer, Payroll Analyst, Marketing Director"></Input>
              </FieldGroup>

              <FieldGroup className="flex flex-col gap-3">
                <FieldLabel>Seniority level</FieldLabel>
                <Input></Input>
              </FieldGroup>

              <FieldGroup className="flex flex-col gap-3">
                <FieldLabel>Skills</FieldLabel>
                <Input></Input>
              </FieldGroup>

              <FieldGroup className="flex flex-col gap-3">
                <FieldLabel>Location preferences</FieldLabel>
                <Input></Input>
              </FieldGroup>

              <FieldGroup className="flex flex-col gap-3">
                <FieldLabel>
                  Contract type (remote / hybrid / onsite)
                </FieldLabel>
                <Input></Input>
              </FieldGroup>
              <Button>Generate Query!</Button>
            </FieldSet>
          </FieldGroup>
        </form>
      </div>
      <div>Output</div>
    </>
  );
}

export default App;
