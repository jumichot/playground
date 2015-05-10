class Cipher
  def initialize(input)
    @input = input
  end

  def normalize
    text = @input.upcase.gsub(/[^A-Z]/, "")
    # text = @input.upcase.delete("^A-Z")
    text += ("X" * ((5 - text.size % 5) % 5)) 
    text.scan(/.{5}/).join(" ")
  end
end

RSpec.describe Cipher do
  describe "#normalize" do
    it "upcase" do
      cipher = Cipher.new("Your cipher is working")
      expect(cipher.normalize).to eq("YOURC IPHER ISWOR KINGX")
    end
    it "add Xs at the end of inputs" do
      cipher = Cipher.new("Code in Ruby, live longer!")
      expect(cipher.normalize).to eq("CODEI NRUBY LIVEL ONGER")
    end
    it "clean punctuation" do
      cipher = Cipher.new("Codein Ruby, live lo!")
      expect(cipher.normalize).to eq("CODEI NRUBY LIVEL OXXXX")
    end
  end
end
