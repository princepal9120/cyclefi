import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class ListenerService implements OnModuleInit , OnModuleDestroy{
     async onModuleInit() {
        // Initialization logic here
        //intialize web sockets provider
        // setup the event subscriber

        throw new Error('Module initialization failed');
    }

    async onModuleDestroy() {
        // remove all subscriptions or listeners here 

        throw new Error('Module cleanup failed');
    }


    intializeWebSocketProvider() {
        // Logic to initialize web socket provider
        const infuraWssUrl = `wss://mainnet.infura.io/ws/v3/YOUR_INFURA_PROJECT_ID`;
    }

    setupEventSubscriber() {
        // Logic to setup event subscriber
    }

    removeAllSubscriptions() {
        // Logic to remove all subscriptions or listeners
    }


} 