from tinyec import registry
import secrets

# Get the brainpoolP256r1 curve from the registry
# curve = registry.get_curve('brainpoolP256r1')
curve = registry.get_curve('secp192r1')

def compress_point(point):
    return hex(point.x) + hex(point.y % 2)[2:]

def ecc_calc_encryption_keys(pubKey):
    ciphertextPrivKey = secrets.randbelow(curve.field.n)
    ciphertextPubKey = ciphertextPrivKey * curve.g
    sharedECCKey = pubKey * ciphertextPrivKey
    return (sharedECCKey, ciphertextPubKey)

def ecc_calc_decryption_key(privKey, ciphertextPubKey):
    sharedECCKey = ciphertextPubKey * privKey
    return sharedECCKey

# Generate a key pair for Bob
bob_priv_key = secrets.randbelow(curve.field.n)
bob_pub_key = bob_priv_key * curve.g
print("Bob's private key:", hex(bob_priv_key))
print("Bob's public key:", compress_point(bob_pub_key))
print("\n")

# Generate a key pair for Alice
alice_priv_key = secrets.randbelow(curve.field.n)
alice_pub_key = alice_priv_key * curve.g
print("Alice's private key:", hex(alice_priv_key))
print("Alice's public key:", compress_point(alice_pub_key))
print("\n")

# Alice generates an encryption key and ciphertext public key using Bob's public key
(encrypt_key, ciphertext_pub_key) = ecc_calc_encryption_keys(bob_pub_key)
print("Ciphertext public key:", compress_point(ciphertext_pub_key))
print("Encryption key:", compress_point(encrypt_key))
print("\n")

# Bob calculates the decryption key using his private key and Alice's ciphertext public key
decrypt_key = ecc_calc_decryption_key(bob_priv_key, ciphertext_pub_key)
print("Decryption key:", compress_point(decrypt_key))
