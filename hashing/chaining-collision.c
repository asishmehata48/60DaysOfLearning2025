#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TABLE_SIZE 10

// Node structure for linked list (for chaining)
typedef struct Node {
    char *key;
    struct Node *next;
} Node;

// Hash table: array of Node pointers
Node *hashTable[TABLE_SIZE];

// Simple hash function: sum of chars % table size
int hashFunction(char *str) {
    int sum = 0;
    for (int i = 0; str[i] != '\0'; i++) {
        sum += str[i];
    }
    return sum % TABLE_SIZE;
}

// Insert key into hash table with chaining
void insert(char *key) {
    int index = hashFunction(key);

    // Create new node
    Node *newNode = (Node *)malloc(sizeof(Node));
    newNode->key = strdup(key);  // Duplicate string
    newNode->next = NULL;

    // Insert at head of linked list at hashTable[index]
    if (hashTable[index] == NULL) {
        hashTable[index] = newNode;
    } else {
        newNode->next = hashTable[index];
        hashTable[index] = newNode;
    }

    printf("Inserted '%s' at index %d\n", key, index);
}

// Print hash table content
void printHashTable() {
    printf("\nHash Table Contents:\n");
    for (int i = 0; i < TABLE_SIZE; i++) {
        printf("Index %d: ", i);
        Node *temp = hashTable[i];
        if (!temp) {
            printf("(empty)");
        }
        while (temp != NULL) {
            printf("%s -> ", temp->key);
            temp = temp->next;
        }
        printf("NULL\n");
    }
}

// Free all allocated memory
void freeHashTable() {
    for (int i = 0; i < TABLE_SIZE; i++) {
        Node *temp = hashTable[i];
        while (temp) {
            Node *toFree = temp;
            temp = temp->next;
            free(toFree->key);
            free(toFree);
        }
    }
}

int main() {
    // Initialize hash table with NULLs
    for (int i = 0; i < TABLE_SIZE; i++) {
        hashTable[i] = NULL;
    }

    // Insert some keys (strings)
    insert("apple");
    insert("banana");
    insert("grape");
    insert("orange");
    insert("melon");
    insert("lemon");  // This may cause collision

    printHashTable();

    freeHashTable();

    return 0;
}
