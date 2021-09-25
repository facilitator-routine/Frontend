import React from "react";
import {Card, Columns, Content, Heading} from "react-bulma-components";

const ListRoutines = ({routines}) =>{
    return(
          <Columns>
              {
                  routines.map(({_id, name, description,steps,alarm,background})=> (
                      <Columns.Column size="4" key={_id}>
                          <Card>
                            <Card.Content>
                                <Content>
                                    <Heading>{name}</Heading>
                                    <Heading subtitle size={6}>{description}</Heading>

                                </Content>
                            </Card.Content>
                          </Card>
                      </Columns.Column>
                  ))                  }

          </Columns>
    )

}
export default ListRoutines