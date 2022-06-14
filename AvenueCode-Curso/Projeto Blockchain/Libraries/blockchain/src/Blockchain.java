import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Blockchain {
    List<Block> blockchain;
    int complexity;

    public Blockchain(int complexity)
    {
        this.blockchain = new ArrayList<>();
        this.complexity = complexity;

        //First block
        Block firstBlock = new Block("Marcos possui 100", "0", new Date().getTime());
        firstBlock.mineBlock(this.complexity);
        this.blockchain.add(firstBlock);
    }

    public int getComplexity()
    {
        return complexity;
    }

    public void insertNewBlock(Block block)
    {
        block.setPreviousHash(this.blockchain.get(this.blockchain.size()-1).getHash());
        this.blockchain.add(block);
    }

    public boolean validateBlockchain()
    {
        boolean isValid = true;
        for (int i = 1;i < this.blockchain.size();i++) {
            String previousHash = this.blockchain.get(i-1).getHash();
            String currentHashPrevious = this.blockchain.get(i).getPreviousHash();

            isValid = previousHash.equals(currentHashPrevious);
            if (!isValid) {
                break;
            }
        }
        return isValid;
    }

    public int getSize() { return this.blockchain.size(); }

    public Block getBlock(int position) { return this.blockchain.get(position); }

    public String toString()
    {
        String retorno = "";
        for(int i = 0;i < this.getSize();i++) {
            retorno += this.blockchain.get(i).toString()+"\n\n";
        }
        return retorno;
    }
}

