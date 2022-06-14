import java.util.*;

public class Main {

    public static Blockchain blockchain;
    public static int howManyBlocksHaveToMine;

    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        blockchain = new Blockchain(4);

        System.out.println("How many blocks do we have to mine?");
        howManyBlocksHaveToMine = scan.nextInt();
        System.out.println("------------------");
        System.out.println("Start to mine now");
        System.out.println("------------------\n");
        miners();
    }

    public static void miners()
    {
        List<MinersUsable> miners = new ArrayList<>();
        for(int i = 0;i <= howManyBlocksHaveToMine;i++) {
            miners.add(new MinersUsable("miner-"+i));
            miners.get(miners.size()-1).start();
        }
    }
}

class MinersUsable implements Runnable {
    private Thread t;
    private String minersName;

    MinersUsable(String name) {
        this.minersName = name;
        if (!this.minersName.contains(Integer.toString(Main.howManyBlocksHaveToMine))) {
            System.out.println("Creating new miner: " + this.minersName);
        }
    }

    public void run() {
        if (this.minersName.contains(Integer.toString(Main.howManyBlocksHaveToMine))) {
            while (Main.blockchain.getSize()-1 != Main.howManyBlocksHaveToMine) {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            System.out.println("\n"+Main.blockchain);
            return;
        }
        Random rand = new Random();
        int number = rand.nextInt();

        Block newBlock = new Block(Integer.toString(number)+this.minersName,"0",new Date().getTime());
        newBlock.mineBlock(Main.blockchain.getComplexity());
        Main.blockchain.insertNewBlock(newBlock);

        System.out.println("\nThe "+this.minersName+" found a block:\n"+
                            "Data:"+newBlock.getData()+"\n"+
                            "Hash:"+newBlock.getHash()+"\n"+
                            "PreviousHash:"+newBlock.getPreviousHash()+"\n"+
                            "Time:"+new Date(newBlock.getTimeStamp())+"\n"
        );
    }

    public void start () {
        if (t == null) {
            t = new Thread (this, this.minersName);
            t.start ();
        }
    }
}

