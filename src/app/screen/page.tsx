import * as React from "react";
import { InputWithButton } from "@/components/ui/input-with-button";
import { Poster } from "@/components/ui/poster";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { Avatar } from "@/components/ui/primitives/avatar";
import { AvatarImage } from "@/components/ui/primitives/avatar";
import { AvatarFallback } from "@/components/ui/primitives/avatar";
import { Button } from "@/components/ui/button";



export const Content = ({ buttonTitle, onClick, posterTitle, posterDescription, cardTitle, cardDescription, items, listTitle, cards }: any) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <InputWithButton buttonTitle={buttonTitle}/>
      <Poster title={posterTitle} description={posterDescription} />
      <Card>
        <CardHeader>
          <CardTitle>{cardTitle}</CardTitle>
          <CardDescription>{cardDescription}</CardDescription>
        </CardHeader>
      </Card>
      <div className="flex justify-around">
        {items.map((item: any) => (
          <div key={item.id} className="flex flex-col space-y-2">
            <Avatar>
              <AvatarImage />
            </Avatar>
            <p className="text-center">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-lg font-semibold">{listTitle}</p>
        {cards.map((card: any) => (
          <Card key={card.id}>
            <CardContent className="flex items-center">
              <Avatar>
                <AvatarImage />
              </Avatar>
              <div className="flex flex-col space-y-1.5 ml-4">
                <p className="font-semibold">{card.title}</p>
                <p className="text-sm">{card.description}</p>
                <p className="text-sm text-yellow-500">{card.rating}</p>
              </div>
            </CardContent>
          </Card>
        ))}
        <Button variant="subtle" size="default">
          See more
        </Button>
      </div>
    </div>
  );
};

//Preview code for Content
/*
<Content
  buttonTitle="Go"
  onClick={() => console.log("Clicked!")}
  posterTitle="Get a discount 30% on your next order"
  posterDescription="Choose from a list of selected items and get up to 30% off your checkout"
  cardTitle="Complete your profile"
  cardDescription="Give us a few more details and we’ll be able to provide tastier suggestions"
  items={[
    { id: '1', title: 'Drinks' },
    { id: '2', title: 'Snacks' },
    { id: '3', title: 'Thai' },
    { id: '4', title: 'Pasta' },
    { id: '5', title: 'Drinks' }
  ]}
  listTitle="Popular in your area"
  cards={[
    { id: '1', title: 'Portobello Juice & All Day Breakfast', description: '£1.99 delivery · 10 - 15min', rating: '⭐️ 4.8' },
    { id: '2', title: 'Trade', description: '£3.99 delivery · 20 - 35min', rating: '⭐️ 4.4' },
    { id: '3', title: 'Butchies Buttermilk Fried', description: '£1.99 delivery · 15 - 25min', rating: '⭐️ 4.5' }
  ]}
/>
*/

const Page = () => {
  return <Content
  buttonTitle="Go"
  onClick={() => console.log("Clicked!")}
  posterTitle="Get a discount 30% on your next order"
  posterDescription="Choose from a list of selected items and get up to 30% off your checkout"
  cardTitle="Complete your profile"
  cardDescription="Give us a few more details and we’ll be able to provide tastier suggestions"
  items={[
    { id: '1', title: 'Drinks' },
    { id: '2', title: 'Snacks' },
    { id: '3', title: 'Thai' },
    { id: '4', title: 'Pasta' },
    { id: '5', title: 'Drinks' }
  ]}
  listTitle="Popular in your area"
  cards={[
    { id: '1', title: 'Portobello Juice & All Day Breakfast', description: '£1.99 delivery · 10 - 15min', rating: '⭐️ 4.8' },
    { id: '2', title: 'Trade', description: '£3.99 delivery · 20 - 35min', rating: '⭐️ 4.4' },
    { id: '3', title: 'Butchies Buttermilk Fried', description: '£1.99 delivery · 15 - 25min', rating: '⭐️ 4.5' }
  ]}
/>
}

export default Page;
