const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./server.js', {
  token: process.env.TOKEN,
  autoSpawn: true
});

manager.spawn(2);

manager.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/${manager.totalShards}`));
