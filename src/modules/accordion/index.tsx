import React, { FC } from "react";
import DocGroup from "../../components/doc-group";
import Accordion from "../../components/accordion";
import AccordionTrigger from "../../components/accordion/accordion-trigger";
import AccordionContainer from "../../components/accordion/accordion-container";
import List from "../../components/list/list";
import ListItem from "../../components/list/list-item";
import Button from "../../components/button";

const defaultList = {
  list: [
    { index: 0, text: "one" },
    { index: 1, text: "two" },
    { index: 2, text: "three" },
    { index: 3, text: "four" },
  ],
};

const AccordionModule: FC = () => {
  return (
    <>
      <DocGroup name="default">
        <div className="flex flex-col w-1/2">
          <Accordion>
            <AccordionTrigger
              text={"trigger"}
              radius="rounded-t-md"
            ></AccordionTrigger>
            <AccordionContainer>
              <List className={"bg-body shadow rounded"}>
                {defaultList.list.map((item, index) => {
                  return (
                    <ListItem key={index} index={index}>
                      {item.text}
                    </ListItem>
                  );
                })}
              </List>
            </AccordionContainer>
          </Accordion>
          <Accordion initiallyExpanded>
            <AccordionTrigger text={"Rustic Concrete Tuna"}></AccordionTrigger>
            <AccordionContainer>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, delectus aliquam ut vitae temporibus est illum quas
              pariatur odio architecto. Ab, adipisci. Quam libero eveniet magni
              fugit quia, voluptate dolores?
            </AccordionContainer>
          </Accordion>
          <Accordion disabled>
            <AccordionTrigger
              text={"Labore et dolore magna aliqua"}
            ></AccordionTrigger>
            <AccordionContainer>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ullam nobis libero quas quod dolores dolorem expedita, eligendi
              fuga cupiditate provident vitae, corrupti maiores pariatur debitis
              et beatae nam impedit!
            </AccordionContainer>
          </Accordion>
          <Accordion>
            <AccordionTrigger
              text="Rustic Concrete Tuna"
              radius="rounded-b-md"
              textClass={"text-primary"}
              extendClass={"text-primary"}
              color="border text-body bg-body hover:text-body-bright active:text-body-dark active:bg-gray-1"
              focusColor={[
                "shadow-outline border-primary-divide",
                "border-normal",
              ]}
            >
              <Button
                color="text-primary hover:bg-primary-opacity-2 mr-2"
                focusColor="shadow-outline"
                icon="s-info"
                iconSize="12"
                preset="text"
                radius="rounded-full"
                size="h-6 w-6"
              />
            </AccordionTrigger>
            <AccordionContainer>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ullam nobis libero quas quod dolores dolorem expedita, eligendi
              fuga cupiditate provident vitae, corrupti maiores pariatur debitis
              et beatae nam impedit!
            </AccordionContainer>
          </Accordion>
        </div>
      </DocGroup>
    </>
  );
};

export default AccordionModule;
